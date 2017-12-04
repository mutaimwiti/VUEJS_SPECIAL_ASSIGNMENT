export const CREATE_CATEGORY = (state, { name, description }) => {
    state.categories.push(
        {
            name: name,
            description: description
        }
    )
};

export const mutations = {
    CREATE_CATEGORY
};