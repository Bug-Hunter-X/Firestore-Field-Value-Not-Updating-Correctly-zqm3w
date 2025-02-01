```javascript
// Incorrectly setting the value for a field in Firestore
db.collection('myCollection').doc('myDoc').update({
  myField: 'newValue'
}).then(() => {
  console.log('Document updated successfully!');
}).catch((error) => {
  console.error('Error updating document:', error);
});
```