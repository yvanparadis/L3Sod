const countVowels = olgan => {
    let count = 0;
    for (let abel of olgan) {
        if ('aeiouAEIOU'.includes(abel)) count++;
    }
    return count;
}
console.log(countVowels("ssssdfg333sxddaaehjkll"));
