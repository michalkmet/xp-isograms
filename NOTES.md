# Notes

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

- ✅  return true when given empty string
- ✅  return false when given no string
- ✅  return false when given 'aba'
- ✅  return true when given 'a'
- ✅  return false when given 'aa'
- ✅  return false when given 'Aab'
- ✅  TODO Return true when given 'Dermatoglyphics'