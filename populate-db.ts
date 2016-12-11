import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";


console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);


const itemsRef = database().ref('items');



dbData.items.forEach( item => {

  console.log('adding item', item.description);

  const itemRef = itemsRef.push({
      description: item.description,
      longDescription: item.longDescription,
      tags: item.tags,
      cost: item.cost,
      address: item.address,
      town: item.town,
      postalCode: item.postalCode,
      eMail: item.eMail,
      phoneNumber: item.phoneNumber,
      photoUrl: item.photoUrl,
  });

});









