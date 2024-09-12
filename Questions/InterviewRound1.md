### Q1: Count Character Frequency

Count the frequency of each character and return the output as characters with their frequency count, where the frequency should be greater than one and the character should not be an empty string.

- **Input**: `"How many repeated characters are in this line ?"`
- **Output**: `{a: 5, n: 3, r: 4, e: 6, t: 3, c: 2, h: 2, s: 2, i: 3}`

```javascript
const countFreq = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  for (let [key, value] of Object.entries(obj)) {
    if (value == 1 || key == ' ') {
      delete obj[key];
    }
  }
  return obj;
};
```

### Q2: Reverse Digit

Reverse the digits of a given number.

- **Input**: `-321`, `321`
- **Output**: `-123`, `123`

```javascript
const reverseDigit = (num) => {
  let pos = true;
  if (num < 0) {
    pos = false;
    num = -1 * num;
  }
  let newNum = String(num).split('').reverse().join('');
  if (!pos) {
    newNum = -1 * newNum;
  }
  return newNum;
};
```

### Q3: Group and Sort Anagrams

Group and sort the list of anagrams: `['eat', 'tea', 'tan', 'ate', 'nat', 'bat']`. All anagrams should be grouped together in sequence.

- **Input**: `['eat', 'tea', 'tan', 'ate', 'nat', 'bat']`
- **Output**: `['eat', 'tea', 'ate', 'tan', 'nat', 'bat']`

**My Solution:**

```javascript
const sortAnagram = (arr) => {
  const newArr = [];
  arr.forEach((str) => 
    newArr.push([
      str.split('').sort().join(''),
      str
    ])
  );
  const x = newArr.sort((a, b) => (a[0] - b[0]));
  return x.map((str) => str[1]);
};
```

**Correct Solution:**

```javascript
const sortAnagram = (arr) => {
  const anagrams = {};

  // Group the words by their sorted character representation
  arr.forEach((str) => {
    const sortedStr = str.split('').sort().join('');
    if (anagrams[sortedStr]) {
      anagrams[sortedStr].push(str);
    } else {
      anagrams[sortedStr] = [str];
    }
  });

  // Flatten the grouped anagrams into a single array
  const sortedAnagrams = [];
  Object.values(anagrams).forEach((group) => {
    sortedAnagrams.push(...group);
  });

  return sortedAnagrams;
};

const inp = ["eat", "tea", "tan", "ate", "nat", "bat"];
const out = sortAnagram(inp);
console.log("Output: ", out);
```

---
