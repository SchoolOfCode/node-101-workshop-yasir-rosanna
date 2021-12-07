import chalk from 'chalk';
import myCollection from "./collection.js";
//console.log(myCollection)
  
function describeItem (item){
if (item.count===1){
  console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}`)
} else {
  console.log(chalk.bgRed(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}s. Here's what I like about them: ${chalk.green(item.whatILike)}`))
}
}

describeItem(myCollection[1])

function describeCollection(array){
  for (let i=0; i<array.length; i++){
     describeItem(array[i])
  }
}

describeCollection(myCollection)