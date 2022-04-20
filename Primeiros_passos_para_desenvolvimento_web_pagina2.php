<html>

	<head>
		<title> Meu segundo site em PHP</title>
		
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<!-- linha acima é para adicionar as dlll-->
		
		<style type="text/css">
			.linha {
				font-weight: bold;
				color: green;
				padding-left: 10px;
				line-height: 50px;
			}
		</style>
	</head>
	
	<body>
	
		<?php
			for ( $i = 0 ; $i < 10 ; $i++ ) {
				print( "<span class=\"linha\">Linha número ". $i . "</span><br />");
		} //span na linha acima é para adicionar a class css linha
		?>
	
	</body>
	
	<script type="text/javascript"> 
		$(document).ready(function() {
			alert("Woohoo");
			});
	</script>
	<!--o código JS acima chamado documet.ready é padrão e usualmente é 
	colocado acima </html> e indica para o navegador executar tudo que
	está na página para depois executar o que está dentro deste código
	como o alert Woohoo, usado em formulários por exemplo-->

</html>