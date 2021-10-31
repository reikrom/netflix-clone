export const makeHref = (path, params) => {
    if (params) {
        return `${path}?${queryString.stringify(params)}`;
    }
    return path;
};

export const genres = [
    { id: 81246426, title: 'Thrillers' },
    { id: 81246427, title: 'Crime' },
    { id: 81246428, title: 'Children & Family' },
    { id: 81246429, title: 'International Films & TV' },
    { id: 81246430, title: 'Reality TV' },
    { id: 81246431, title: 'Action' },
    { id: 81246432, title: 'Anime' },
    { id: 81246433, title: 'Comedies' },
    { id: 81246434, title: 'Fantasy' },
    { id: 81246435, title: 'Sci-Fi' },
    { id: 81246436, title: 'Horror' },
    { id: 81246437, title: 'Stand-up Comedy' },
    { id: 81246438, title: 'Documentaries' },
    { id: 81246439, title: 'Music & Musicals' },
    { id: 81246440, title: 'Romance' },
    { id: 81246441, title: 'Dramas' },
    { id: 81246442, title: 'British Movies & TV' },
];

export const getPageTitle = (id) => {
    const title = genres.find((genre) => genre.id.toString() === id).title;

    return title;
};
