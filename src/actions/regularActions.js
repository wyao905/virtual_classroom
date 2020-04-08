export const displayLectureContent = (id) => {
    return {
        type: 'DISPLAY_LECTURE_CONTENT',
        id: id
    };
};

export const clearLectureContent = () => {
    return {
        type: 'CLEAR_LECTURE_CONTENT',
        id: ""
    };
};

// export const addAuthor = author => {
//     return {
//         type: 'ADD_AUTHOR',
//         author
//     };
// };

// export const addAuthor = author => {
//     return {
//         type: 'ADD_AUTHOR',
//         author
//     };
// };