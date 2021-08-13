import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
const addListing = (listing) => {
    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("categoryId", listing.category.value);
    data.append("description", listing.description);
    listing.images.forEach((image) =>
        data.append("images", {
            name: image.id.toString(),
            type: "image/jpeg",
            uri: image.uri,
        })
    );
    if (listing.location) {
        data.append("location", JSON.stringify(listing.location));
    }

    return client.post(endpoint, data);
};

const listingsApi = {
    getListings,
    addListing,
};
export default listingsApi;
