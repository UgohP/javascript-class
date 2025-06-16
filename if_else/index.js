let age = 20

if(age >= 60){
  console.log(`You are in retirement age`)
}else if(age >= 18){
  console.log(`You are a working class`)
}else if(age < 0){
  console.log('Your age cannot be below 0')
}else if(age === 0){
  console.log(`No, you were just born`)
}else{
  console.log(`You are underage`)
}