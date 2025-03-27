export function formatPrice(price: number | undefined) : string {
    // Completa as duas casas decimais depois do ponto e troca ele por vírgula
    if (!price) return '';
    else return price.toFixed(2).toString().replace('.', ',');    
}