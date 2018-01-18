export const CREATE_CATEGORY = (state, { name, description }) => {
    state.categories.push(
        {
            name: name,
            description: description
        }
    )
};

export const CREATE_ITEM = (state, { name, category, units }) => {
    state.items.push(
        {
            name: name,
            category: category,
            stock: 0,
            units: units
        }
    )
};

export const REMOVE_CATEGORY = (state, category) => {
    state.categories.splice(state.categories.indexOf(category), 1);
};

export const mutations = {
    CREATE_CATEGORY,
    CREATE_ITEM,
    REMOVE_CATEGORY
};
