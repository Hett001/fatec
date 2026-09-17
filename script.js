function ex01() {
            let salario = parseFloat(document.getElementById('salario01').value);
            let percentual = parseFloat(document.getElementById('percentual01').value);
            if (isNaN(salario) || isNaN(percentual)) {
                document.getElementById('res01').innerText = "Preencha os campos corretamente.";
                return;
            }
            let novoSalario = salario + (salario * (percentual / 100));
            document.getElementById('res01').innerText = `O novo salário é: R$ ${novoSalario.toFixed(2)}`;
        }

        function ex02() {
            let base = parseFloat(document.getElementById('base02').value);
            let altura = parseFloat(document.getElementById('altura02').value);
            if (isNaN(base) || isNaN(altura)) {
                document.getElementById('area02').value = "";
                return;
            }
            let area = (base * altura) / 2;
            document.getElementById('area02').value = area.toFixed(2);
        }

        function ex03() {
            let nota1 = parseFloat(document.getElementById('nota1_03').value);
            let nota2 = parseFloat(document.getElementById('nota2_03').value);
            let lbl = document.getElementById('lblResultado03');
            if (isNaN(nota1) || isNaN(nota2)) {
                lbl.innerText = "Média Final: Preencha todas as notas.";
                return;
            }
            let media = (nota1 * 0.3) + (nota2 * 0.7);
            lbl.innerText = `Média Final: ${media.toFixed(2)}`;
        }

        function ex04() {
            let anoNascimento = parseInt(document.getElementById('ano04').value);
            if (isNaN(anoNascimento)) {
                alert("Digite um ano de nascimento válido.");
                return;
            }
            const anoAtual = new Date().getFullYear();
            const anos = anoAtual - anoNascimento;
            const semanas = anos * 52;
            const dias = anos * 365;
            const horas = dias * 24;
            const minutos = horas * 60;
            const meses = anos * 12;
            const idade2050 = 2050 - anoNascimento;

            console.clear();
            console.log(`--- EXERCÍCIO 04: Idade de quem nasceu em ${anoNascimento} ---`);
            console.log(`Anos aproximados: ${anos}`);
            console.log(`Meses aproximados: ${meses}`);
            console.log(`Semanas aproximadas: ${semanas}`);
            console.log(`Dias aproximados: ${dias}`);
            console.log(`Horas aproximadas: ${horas}`);
            console.log(`Minutos aproximados: ${minutos}`);
            console.log(`Idade em 2050: ${idade2050} anos`);
            alert("Resultado gerado no Console do navegador (Pressione F12).");
        }

        function ex05() {
            let distancia = parseFloat(document.getElementById('distancia05').value);
            let volume = parseFloat(document.getElementById('volume05').value);
            let res = document.getElementById('res05');
            if (isNaN(distancia) || isNaN(volume) || volume === 0) {
                res.innerText = "Informe valores válidos (volume não pode ser zero).";
                return;
            }
            let consumo = distancia / volume;
            res.innerText = `O consumo médio foi de ${consumo.toFixed(2)} km/l.`;
        }

        function ex06() {
            let horasTrabalhadas = 62;
            let valorHoraNormal = 20.00; // Valor base adotado por hora
            let horasNormais = 40;
            let horasExtras = horasTrabalhadas - 40;
            let valorHoraExtra = valorHoraNormal * 3;

            let salarioBruto = (horasNormais * valorHoraNormal) + (horasExtras * valorHoraExtra);
            
            let totalRefeicoes = 62; 
            let descontoRefeicao = totalRefeicoes * 1.50;
            let salarioLiquido = salarioBruto - descontoRefeicao;

            console.clear();
            console.log("--- EXERCÍCIO 06: Folha de Pagamento RAB ---");
            console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
            console.log(`Desconto Refeição (${totalRefeicoes} refeições): R$ ${descontoRefeicao.toFixed(2)}`);
            console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
            alert("Folha de pagamento calculada! Veja os detalhes no Console do navegador (Pressione F12).");
        }

        function ex07() {
            let numero = Math.floor(Math.random() * 100) + 1;
            document.getElementById('resNumero07').innerText = `Número gerado: ${numero}`;
            if (numero % 2 === 0) {
                document.getElementById('resParImpar07').innerText = "O número é PAR.";
                document.getElementById('resParImpar07').style.color = "green";
            } else {
                document.getElementById('resParImpar07').innerText = "O número é ÍMPAR.";
                document.getElementById('resParImpar07').style.color = "blue";
            }
        }