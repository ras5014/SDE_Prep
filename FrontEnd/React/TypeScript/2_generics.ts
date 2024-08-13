// Generic Types

type DataStorage<T> = {
    storage: T[],
    addItem: (item: T) => void,
}

const textStorage: DataStorage<string> = {
    storage: ['A', 'B'],
    addItem: function (item) {
        this.storage.push(item)
    }
}

textStorage.addItem('C')
console.log(textStorage.storage)

// Generic Functions
const merge = <T, U>(objA: T, objB: U) => {
    return {
        ...objA,
        ...objB
    }
}

const mergedObj = merge({ name: 'Max' }, { age: 30 })
console.log(mergedObj)