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

export const EDIT_CATEGORY = (state, { old, name, description }) => {
    let index = state.categories.indexOf(old);
    state.categories[index].name = name;
    state.categories[index].description = description;
};

export const REMOVE_ITEM = (state, item) => {
    state.items.splice(state.items.indexOf(item), 1);
};

export const EDIT_ITEM = (state, { old, name, category, units }) => {
    let index = state.items.indexOf(old);
    state.items[index].name = name;
    state.items[index].category = category;
    state.items[index].units = units;
};

export const mutations = {
    CREATE_CATEGORY,
    CREATE_ITEM,
    REMOVE_CATEGORY,
    EDIT_CATEGORY,
    REMOVE_ITEM,
    EDIT_ITEM
};
