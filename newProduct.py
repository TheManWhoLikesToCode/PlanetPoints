import os
from google.cloud import storage, vision_v1
import re 
from ingredient_parser import parse_multiple_ingredients, parse_ingredient
import json

# Set the path to your JSON key file
json_key_path = './spartahack9-aa720278c9f3.json'

# Set the GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = json_key_path

bucket_name = "planetpoints"
image_name = "test.png"

def analyze_image_from_gcs(bucket_name, image_name):
    """
    Analyzes an image from Google Cloud Storage using the Google Cloud Vision API.

    Args:
        bucket_name (str): The name of the Google Cloud Storage bucket.
        image_name (str): The name of the image in the Google Cloud Storage bucket.

    Returns:
        object: The response from the Google Cloud Vision API for text detection.
    """
    # Set up Google Cloud Storage client
    storage_client = storage.Client()

    # Set up Google Cloud Vision API client
    vision_client = vision_v1.ImageAnnotatorClient()

    # Download the image from Google Cloud Storage
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(image_name)
    image_content = blob.download_as_bytes()

    # Analyze the image using Google Cloud Vision API
    image = vision_v1.Image(content=image_content)
    
    # Logo detection
    logo_response = vision_client.logo_detection(image=image)
    logos = logo_response.logo_annotations

    # Text detection
    text_response = vision_client.text_detection(image=image)
    texts = text_response.text_annotations

    # Flag to start capturing words
    start_capturing = False
    captured_text = ""

    # Process the labels or perform further actions
    for text in texts:
        description = text.description

        if "INGREDIENTS:" in description:
            start_capturing = True

        if start_capturing:
            captured_text += description + " "

        # Stop capturing if the last fuller uppercase word is found
        if start_capturing and description.isupper() and len(description) > 2:
            last_fuller_uppercase_word = description
    # Return the most likely logo along with other results
    return text_response, last_fuller_uppercase_word, captured_text

# Call the function
text_response, last_fuller_uppercase_word, captured_text = analyze_image_from_gcs(bucket_name, image_name)

# Print the captured text
print(captured_text.strip())
print("Last Fuller Uppercase Word:", last_fuller_uppercase_word)


'''
def extract_ingredients(text):
    """
    Extracts ingredients from the given text and returns a filtered list of ingredients. 

    Args:
        text (str): The input text containing ingredient information.

    Returns:
        list: A list of filtered ingredients.
    """
   
    # Parse ingredients
    parsed_result = parse_ingredient(text)

    # Accessing information
    ingredients_name = parsed_result.name.text
    
    # Seperate bycomma
    ingredients_separated = ingredients_name.split(',')

    # Change to array and filter noningredients
    ingredients_array = [ingredient.strip() for ingredient in ingredients_separated]
    filtered_ingredients = [ingredient for ingredient in ingredients_array if (ingredient.isupper()) and len(ingredient) > 2]


    filtered_ingredients_json = json.dumps(filtered_ingredients)
    
    return filtered_ingredients_json

print(extract_ingredients(filtered_ingredients))
'''

#Delete png after scan 