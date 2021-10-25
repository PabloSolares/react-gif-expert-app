
export const getGifs = async( category ) => {
    const keyApi = 'bTXwxAJkTQ8Rpcm5XXTrin7pKw34Lo9P';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&q=${ encodeURI(category) }&limit=10`
    
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // Images
    return gifs;
}
