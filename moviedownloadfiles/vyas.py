import internetarchive
import os

def download_public_domain_movies(destination_folder="downloaded_movies"):
    """
    Downloads items from the 'moviesandfilms' collection on Internet Archive
    where metadata includes the term 'publicdomain'.

    :param destination_folder: local folder in which to store the downloaded files
    """

    # Ensure the destination folder exists
    os.makedirs(destination_folder, exist_ok=True)
    
    # Build search query
    search_query = 'collection:moviesandfilms publicdomain'
    
    # Perform the search
    search_results = internetarchive.search_items(
        search_query,
        sorts=['-week']  # Sort descending by 'week' to mimic the page’s sort order
    )

    # Iterate through results
    for item_result in search_results:
        identifier = item_result['identifier']
        print(f"Found item: {identifier}")
        
        # Fetch the item
        item = internetarchive.get_item(identifier)
        
        # Download all files for this item
        #   - `verbose=True` to see progress
        #   - `destdir=destination_folder` to choose where to store it
        #   - `formats` can be specified to limit to certain file formats (e.g., MP4).
        #     For full movies, you might want to filter out text files, thumbnails, etc.
        #     For example, to only download MP4 files, use formats=['MP4'].
        #   - If you want everything, don’t specify `formats`.
        item.download(
            verbose=True,
            destdir=destination_folder
            #, formats=['MP4']  # Uncomment if you only want certain formats
        )

if __name__ == "__main__":
    download_public_domain_movies()
