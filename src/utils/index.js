export const handleTypes = (types) => {
    if (types[1]) {
        return types[0].type.name + " | " + types[1].type.name;
    } else {
        return types[0].type.name;
    }
};

export const handleAbility = (abilities) => {
    if (abilities[0]) {
        return abilities[0].ability.name;
    } else if (abilities[1]) {
        return abilities[0].ability.name + " | " + abilities[1].ability.name;
    } else {
        return (
            abilities[0].ability.name +
            " | " +
            abilities[1].ability.name +
            " | " +
            abilities[2].ability.name
        );
    }
};
