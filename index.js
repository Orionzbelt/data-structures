function findDistinctSum(set1, set2) {
    const distinctElements = [];

    // Loop through the elements of set1
    for (const element of set1) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Loop through the elements of set2
    for (const element of set2) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Calculate the sum of all distinct elements
    let sum = 0;
    for (const element of distinctElements) {
        sum += element;
    }

    return sum;
}


