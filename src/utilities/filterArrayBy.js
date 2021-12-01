export const filterArrayBy = (arr, field, queryArr) => {
    return arr.filter(item => {
        for (let i = 0; i < queryArr.length; i++) {
            return item[field].toLowerCase().includes(queryArr[i])
        }
        return false
    })
}