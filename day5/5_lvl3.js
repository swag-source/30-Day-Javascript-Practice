const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
const ageSort = ages.sort()
const minAge = Math.min(parseInt(ageSort))
const maxAge = Math.max(parseInt(ageSort))

//Find the median age(one middle item or two middle items divided by two)
const median = ages.length / 2
console.log(ages[median])

// Find the range of the ages(max minus min)