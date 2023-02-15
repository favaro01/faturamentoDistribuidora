$.getJSON("dados-faturamento.json", function (dados) {
    const faturamento = dados.faturamento;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;
  
    for (let i = 0; i < faturamento.length; i++) {
      if (faturamento[i].valor) {
        totalFaturamento += faturamento[i].valor;
        diasComFaturamento++;
  
        const linha = `
          <tr>
            <td>${faturamento[i].data}</td>
            <td>${faturamento[i].valor}</td>
          </tr>
        `;
        $("#faturamento").append(linha);
      }
    }
  
    const mediaFaturamento = totalFaturamento / diasComFaturamento;
    let menorValor = Number.POSITIVE_INFINITY;
    let maiorValor = Number.NEGATIVE_INFINITY;
    let diasAcimaMedia = 0;
  
    for (let i = 0; i < faturamento.length; i++) {
      if (faturamento[i].valor) {
        if (faturamento[i].valor < menorValor) {
          menorValor = faturamento[i].valor;
        }
        if (faturamento[i].valor > maiorValor) {
          maiorValor = faturamento[i].valor;
        }
        if (faturamento[i].valor > mediaFaturamento) {
          diasAcimaMedia++;
        }
      }
    }
  
    $("#menor-valor").append(`${menorValor}`);
    $("#maior-valor").append(`${maiorValor}`);
    $("#dias-acima-media").append(`${diasAcimaMedia}`);
  });