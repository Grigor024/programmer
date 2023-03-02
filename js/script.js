// let i = 60;

// for(i=0; i<=20; i++)
// {
//     document.write("<br> "+ i);
// } 



// const array = ['Yerevan', 'Moscow', 'New York', 'San Antonio'];

// let text = "";

// for (let i = 0; i < array.length; i++ )
// {
    
//     //document.write('<br>', array[i]);
// //     text += array[i] + "<br>" ;
// // }

// // document.getElementById("demo").innerHTML = text;
// //         0  1  2   3   4  ...           9
// let arr = [1, 5, 43, 6, 43, 5, 2, 5, 766, 7]




// // while(arr[count] >= 0)
// // {
// //     if(arr[count] % 2 == 0)
// //     {
// //         console.log(arr[count]);
        
// //     }

// //     count++;
// // }

// let  i = 0;
// let max = 0;



// while(i < arr.length)
// {

//     i++;
// }
// console.log(max);


// function myFunction() {
//     var x = document.createElement("BUTTON");
//     // var t = document.createText("Click me");
//     x.appendChild(t);
//     document.body.appendChild(x);
//     return ("8");
// }


//let test = prompt('enter');
//let test2 = 48

// let test1 = prompt('enter first');
// let test2 = prompt('enter second');

// //let test1 = 25;
// //let test2 = '25';

// if(test1 === test2)
// {
//     console.log('+++');
// }
// else
// {
//     console.log("---");
// }

// let num1 = prompt('enter');
// let num2 = prompt('enter');


// if (num1 <= 1 || num2 >= 3)
// {
//     document.write('verno')
// }
// else
// {
//     document.write('neverno')
// }

// let num = 3;
		
// if (!(num > 5 || num > 0 && num < 3)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = false;

// if (test === true)
// {
//     console.log('+++');
// }
// else
// {
//     console.log('---');
// }

// let x = 6;
// let y = 'dkhfkdjh';
// let z = true;
// let u = false;

// let r = x !== y;

// console.log(r);


// let test = true;

// if(!false)
// {
//     console.log('+++');
// }
// else
// {
//     console.log('---');
// }

// let test1 = true;
// let test2 = true;
// let test3 = true;

// if (test1 || test2 && !test3 ) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// let test = 1;

// if(test == 1)
// {
//     console.log('***');
// }




// else if


// let num = prompt('enter');

// if ( num == 1 )
// {
//     console.log('+++');
// }
// else if ( num == 2 )
// {
//     console.log('---');
// }
// else if ( num == 3)
// {
//     console.log('***');
// }
// else
// {
//     console.log('Error');
// }


// let day = prompt('Enter number');

// if (day >= 1 && day < 11 )
// {
//     console.log('First decade');
// }
// else if(day >= 11 && day < 21)
// {
//     console.log('Second decade');
// }
// else if (day >= 21 && day <= 31)
// {
//     console.log('Third decade');
// }
// else
// {
//     console.log('Error');
    
// }


// let num = prompt('enter');

// if ( num >= 0)
// {
//     if ( num <= 5 )
//     {
//         console.log('menshe ili ravno');
//     }
//     else 
//     {
//         console.log('bolshe 5');
//     }

// }
// else
// {
//     console.log('menshe nulya');
// }



let num = prompt('Enter the number');

document.write('Entered number:  ', num, '<br>' )

if( num < 10 || num > 99)
{

    alert('It`s not in 10 to 99 ');
}
 else
{
{
    let num1 = num % 10
    let num2 = (num - num1) / 10;
    let num3 = num1 + num2;
    
    document.write( 'num1: ',  num1, '<br>',
                 'num2: ', num2,'<br>',
                 'num3: ', num3,'<br>',);
    

if( num3 <= 9 )
{
    document.write( '<br>', ' Summa ne dvuznachnaya');
}

else 
{
    document.write('<br>', ' Summa dvuznachnaya');
}

}
}