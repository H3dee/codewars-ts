const input1 = [1, 2, 2, 1];
const input2 = [2, 2];
//output -> [2, 2]

const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];
//output -> [4, 9]

const intersect = (arr1: number[], arr2: number[]): Array<number> => {
    const arrayEntities: Record<string, number[]> =
        arr1.length > arr2.length || arr1.length === arr2.length
            ? { greaterArray: [...arr1], lesserArray: [...arr2] }
            : { greaterArray: [...arr2], lesserArray: [...arr1] };
    const appearances: Map<number, Record<string, number>> = new Map();
    const intersection: number[] = [];

    arrayEntities.greaterArray.forEach((item, i) => {
        const currentNumberAppearances = appearances.get(item);

        if (!!!currentNumberAppearances) {
            appearances.set(item, {
                greaterArray: 1,
                lesserArray: Number(arrayEntities.lesserArray.includes(item)),
            });
        } else {
            currentNumberAppearances.greaterArray++;
            if (arrayEntities.lesserArray.includes(item)) {
                currentNumberAppearances.lesserArray++;
            }
        }
    });

    for (const [key, values] of appearances) {
        const greaterArrayValue = values.greaterArray;
        const lesserArrayValue = values.lesserArray;

        if (greaterArrayValue > 0 && lesserArrayValue > 0) {
            Array.from(
                {
                    length:
                        greaterArrayValue !== lesserArrayValue
                            ? Math.abs(greaterArrayValue - lesserArrayValue)
                            : greaterArrayValue,
                },
                () => key,
            ).forEach((number) => {
                intersection.push(number);
            });
        }
    }

    return intersection;
};

console.log(intersect(input3, input4));
