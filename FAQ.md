### GOOD TO KNOW ###

1. Page name in go() function is case sensetive;
2. When return muliple DOM elements in components you cant use .ADD method. 
	
	CASE: You call "cmp.someComponent().ADD()"
	 -----------------------------------------
	|	Will work 	 -> {retun $['div']()}    |
	|	Throws error -> {retun [ 			  |
	|							  $['div'](), |
	|							  $['div']()  |
	|						   ]}			  |
     -----------------------------------------

3. 