//
// Nom : exercices.js
// Date et auteur :
//
// Description :
//		Exercices en javascript
//		Calcul de la suite de Fibonacci
//		Ecriture de la fonction range(stop, [start], [step]) qui prend trois
// arguments en paramètre et renvoie le tableau des entiers compris entre
// start (inclus) et stop (exclu) avec un pas de step.
//


// Fonction Appeler_Fibonacci :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit le rang n dans l'entrée html
//		- appelle la fonction Fibonacci()
function Appeler_Fibonacci()
{
	// lecture de la valeur saisie qui est convertie en nombre
	const n = Number(document.forms["fibonacci"]["n"].value);
	
	// appel de la fonction Fibonacci
	let fibo = Fibonacci(n);
	
	// affichage du résultat dans la page html
	let resultat = document.getElementById("resultat_fibonacci").innerHTML = "Résultat : Fibonacci(" + n + ") = " + fibo;
}

// Retourne/renvoie la suite de Fibonacci au rang n
function Fibonacci(n)
{
	// contrôle du paramètre n
	if (!Number.isInteger(n) || n<0)
	{    
		return undefined;
	}
	
	// cas particulier
	if (n==0)
	{
		return 0;
	}

	// cas général
	let fibo2 = 0;
	let fibo1 = 0;
	let fibo = 1;
	for(let i=1; i<n; i++)
	{
		fibo2 = fibo1;
		fibo1 = fibo;
		fibo = fibo1 + fibo2;
	}
	return fibo; 
}


// Fonction Appeler_Range :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit les données dans les entrées html
//		- appelle la fonction Range()
function Appeler_Range()
{
	// lecture des valeurs saisies qui sont converties en nombre
	const stop = Number(document.forms["range"]["stop"].value);
	const start = Number(document.forms["range"]["start"].value);
	const step = Number(document.forms["range"]["step"].value);
	
	// appel de la fonction Range
	let range = Range(stop, start, step);
	
	// affichage du résultat dans la page html
	let resultat = document.getElementById("resultat_range").innerHTML = "Résultat : Range(" + stop + ", " + start + ", " + step + ") = " + range;
}


// Fonction Range(stop, start=0, step=1)
// Retourne/Renvoie le tableau des entiers compris entre start (inclus) et 
// stop (exclu) avec un pas de step.
function Range(stop, start=0, step=1)
{
	// contrôle des paramètres
	if (!Number.isInteger(stop) || !Number.isInteger(start) || !Number.isInteger(step))
	{    
		return undefined;
	}
	
	// cas particulier
	if (step==0)
	{
		return undefined;
	}
	
	// cas général
	let range = [];
	for(let i=start; i<stop; i+=step)
	{
		range.push(i);
	}
	return range;

}
