async function fetchUserData (){
const res = await fetch(apiUrl)
const data = await res.json()
console.log('size :', data.users.length)
const maleUsers = data.users.filter(user => user.gender === 'male')
console.log('male users size:',maleUsers.length)
const avg = maleUsers.reduce((acc,user)=> acc + user.age,0 )/maleUsers.length
console.log('average age is ',avg)
}

fetchUserData();