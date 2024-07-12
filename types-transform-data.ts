export type UserArray = [[string, number], [string, string], [string, number]]

export type TransformedData = {
    label: string,
    value: number
}

export type TransformDataFunction = (data: UserArray[]) => TransformedData[]