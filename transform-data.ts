import { TransformDataFunction, TransformedData, UserArray } from "./types-transform-data"

const transformData: TransformDataFunction = (data) => {
    const result: TransformedData[] = []

    for (let i = 0; i < data.length; i++) {
        const id = data[i][0][1]
        const name = data[i][1][1]
        const age = data[i][2][1]

        result.push({
            label: `${name}, ${age}`,
            value: id
        })
    }

    return result
}

const inputData: UserArray[] = [
    [["id", 1], ["name", "Ivan"], ["age", 23]],
    [["id", 2], ["name", "Maria"], ["age", 30]],
    [["id", 3], ["name", "Anna"], ["age", 28]],
];

console.log(transformData(inputData))