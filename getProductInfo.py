import requests
import json
import os

# Needs to be chaneged to input from Android App for Barcode Scanning
barcode = "051000012517"

def get_product_info(barcode):
    """
    Retrieves product information using the provided barcode.

    Args:
        barcode (str): The barcode of the product.

    Returns:
        dict: A dictionary containing product information including brand, name, and ingredients.
            If an exception occurs, returns a dictionary with status code 500.
    """
    #API Key
    api_key = "1px3s2oy6i0jmxyimb7ddbpyhiapmd"
    #API URL for Barcode Product Info 
    api_url = f'https://api.barcodelookup.com/v2/products?barcode={barcode}&formatted=y&key={api_key}'
    try:
        response = requests.get(api_url)

        if response.status_code == 200:
           
            product_info = response.json()
            product_name = product_info['products'][0]['product_name']  
            product_brand = product_info['products'][0]['brand']
            product_indegredients = product_info['products'][0]['ingredients']

            product_array = product_indegredients.split(",")
            
            return{ 
                'Brands' : product_brand,
                'Name' : product_name,
                'Ingredients' : product_indegredients
            }

    except Exception as e:
        return{
            'statuscode' : 500 
        }
         
    return product_info, product_name, product_brand, product_indegredients, 

product_indegredients = get_product_info(barcode)



def lambda_handler(event, context):
    barcode = event['barcode']
    api_key = os.environ['BARCODE_API_KEY']

    result = get_product_info(barcode, api_key)
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }