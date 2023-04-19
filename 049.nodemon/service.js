const arr = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
];

function getAllData() {
    return arr;
}

function createData(name, age) {
    const obj = {
        id: arr.length + 1,
        name: name,
        age: age
    }
    arr.push(obj);
    return arr;
};

function updateData(id, name, age) {
    const filtered = arr.filter(el => el.id != +id)
    if (arr.length != filtered.length) {
        const obj = {
            id: +id,
            name: name,
            age: age
        };
        filtered.push(obj);
        return filtered;

    } else {
        return 'id is not exists'
    }

};

function deleteData(id) {
    const filtered = arr.filter(el => el.id != +id);
    return filtered;
}



module.exports = { getAllData, createData, updateData, deleteData };