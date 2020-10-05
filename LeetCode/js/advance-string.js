// Trie Node
function TrieNode () {
  this.children = {} // Table
  this.endOfWord = false;
}

// Trie Class
function Trie () {
  this.root = new TrieNode();
}

// Insert
Trie.prototype.insert = function (word) {
  var current = this.root;
  for (var i = 0, l = word.length; i < l; i++) {
      var ch = word.charAt(i);
      var node = current.children[ch];
      if (node == null) {
          node = new TrieNode();
          current.children[ch] = node;
      }
      current = node;
  }
   // Mark the current nodes endOfWord as "true"
  current.endOfWord = true;
}

// Search
Trie.prototype.search = function (word) {
  var current = this.root;
  for (var i = 0, l = word.length; i < l; i++) {
      var ch = word.charAt(i);
      var node = current.children[ch];
      if (node == null) {
          // Node doesn't exist
          return false;
      }
      current = node;
  }
  return current.endOfWord;
}

// Delete
Trie.prototype.delete = function (word) {
  this.deleteRecursively (this.root, word, 0);
}

// Delete: Helper Function
Trie.prototype.deleteRecursively = function (current, word, index) {
  if (index == word.length) {
      // When end of word is reached only delete if current.end of...
      // ... Word is "true"
      if (!current.endOfWord) {
          return false;
      }
      current.endOfWord = false;
      // If current has no other mapping then return "true"
      return Object.keys (current.children).length == 0;
  }
  var ch = word.charAt (index),
      node = current.children[ch];
  if (node == null) {
      return false;
  }
  var shouldDeleteCurrentNode = this.deleteRecursively (node, word, index + 1);
  // If "true" is returned then delete the mapping...
  // ...of character and trienode reference from map
  if (shouldDeleteCurrentNode) {
      delete current.children[ch];
      // Return "true" if no mappings are left in the map
      return Object.keys (current.children).length == 0;
  }
  return false;
}

// Instance of the Trie Class
var trie = new Trie ();

// 1st: Insert
trie.insert ("Edison");
trie.insert ("Edis");
trie.insert ("Edi");

// 2nd: Search
console.log(trie.search ("Edison")); // Print "true"
console.log(trie.search ("Edis")); // Print "true"
console.log(trie.search ("Edi")); // Print "true"
trie.search ("Ed"); // Print "false"

// 3rd: Delete
trie.delete ("Edison");
trie.delete ("Edis");
trie.delete ("Edi");

// 4th: Search (Again)
console.log(trie.search ("Edison")); // Print "false"
console.log(trie.search ("Edis")); // Print "false"
console.log(trie.search ("Edi")); // Print "false"
trie.search ("Ed"); // Print "false"