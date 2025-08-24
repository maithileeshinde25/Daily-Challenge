function groupAnagrams(strs) {
    const map = new Map();

    for (let word of strs) {
        // Sort the word
        const key = word.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }

    return Array.from(map.values());
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
