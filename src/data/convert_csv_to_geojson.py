# Airports comes from https://catalog.data.gov/dataset?tags=airport
import csv
import json
import re

# Replace with your CSV file path
csv_file_path = './Airports.csv'

# Replace with your desired output GeoJSON file path
output_geojson_path = './ne_airports.geojson'

# Home airports list
home_airports_list = ['2B7', '76B', 'ASH', 'B19', 'B81', 'ASH', 'BED', 'BST', 'BXM', 'IWI', 'LEW', 'OWD', 'OWK', 'PWM', 'SFM', 'LEW', 'PWM', 'SFM']

# Function to convert CSV to GeoJSON
def csv_to_geojson(csv_path, geojson_path, home_airports):
    features = []
    with open(csv_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["County_Pos"] in ['ME', 'NH', 'VT', 'MA'] and row["Fac_Use"] == "PU":
                # Extract longitude and latitude 
                coordinate = row["the_geom"]
                pattern = r'(-?\d+\.\d+)\s+(-?\d+\.\d+)'
                match = re.search(pattern, coordinate)

                longitude = float(match.group(1))
                latitude = float(match.group(2))
                feature = {
                    "type": "Feature",
                    "properties": {
                        "identifier": row["Loc_Id"],
                        "name": row["Fac_Name"],
                        "elevation": row["Elevation"],
                        "airport-type": row["Fac_Type"].lower(),
                        "ishome": row["Loc_Id"] in home_airports
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [float(longitude), float(latitude)]
                    }
                }
                features.append(feature)
    
    # Constructing the GeoJSON structure
    geojson = {
        "type": "FeatureCollection",
        "features": features
    }

    # Writing to a GeoJSON file
    with open(geojson_path, 'w') as outfile:
        json.dump(geojson, outfile, indent=4)

# Run the conversion
csv_to_geojson(csv_file_path, output_geojson_path, home_airports_list)
