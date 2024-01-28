import os
from google.cloud import storage, vision_v1
from ingredient_parser import parse_ingredient
import json

# Set the path to your JSON key file
json_key_path = './spartahack9-aa720278c9f3.json'

# Set the GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = json_key_path

image_name = "test.png"


bucket_name = "planetpoints"


def analyze_image_from_gcs(bucket_name, image_name):
    """
    Analyzes an image from Google Cloud Storage using the Google Cloud Vision API.
    
    Args:
        bucket_name (str): The name of the Google Cloud Storage bucket.
        image_name (str): The name of the image in the specified bucket.
    
    Returns:
        str: Concatenated text extracted from the analyzed image.
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
    
    # Text detection
    text_response = vision_client.text_detection(image=image)
    texts = text_response.text_annotations

    concatenated_text = ""
    ingredients_started = False

    for text in texts:
        line = text.description.strip()
        
        if line.startswith("INGREDIENTS"):
            ingredients_started = True
        
        if ingredients_started == True:
            concatenated_text += line + " "
        
        if not any(char.isupper() for char in line) and line.isalpha():
            # Assuming the last fully uppercase word indicates the end of ingredients
            ingredients_started = False

    return concatenated_text

concatenated_text = analyze_image_from_gcs(bucket_name, image_name)


def extract_ingredients(text):
    """
    Extracts ingredients from the given text and returns the filtered ingredients as a JSON string.
    
    Args:
        text (str): The input text containing the ingredients.
    
    Returns:
        str: A JSON string containing the filtered ingredients.
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
    filtered_ingredients[0] = filtered_ingredients[0].replace("INGREDIENTS : ", "")
    
    # To JSON
    filtered_ingredients_json = json.dumps(filtered_ingredients)
    
    return filtered_ingredients_json

filtered_ingredients_json = (extract_ingredients(concatenated_text))


#Delete after anaylsis
def delete_image(bucket_name, image_name):
    """
    Deletes an image from Google Cloud Storage.

    Args:
        bucket_name (str): The name of the Google Cloud Storage bucket.
        image_name (str): The name of the image in the Google Cloud Storage bucket.
    """
    # Set up Google Cloud Storage client
    storage_client = storage.Client()

    try:
        # Access the bucket and the blob
        storage_client = storage.Client()

        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(image_name)
        blob.delete()

    except Exception as e :
        print(f"The file {image_name} was not found in the bucket {bucket_name}.")

delete_image(bucket_name, image_name)
