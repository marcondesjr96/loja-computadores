export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque:14 },
    { id: 2, descricao: "Monitor MacBook - Apple", preco: 1199.99, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque:10 },
    { id: 3, descricao: "Teclado MacBook - Apple", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque:10 },
    { id: 4, descricao: "Fone XP3492", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque:10 },
    { id: 5, descricao: "Fone de ouvido IP2", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque:10 },
    { id: 6, descricao: "Fone de ouvido G4B2", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque:10 },
    { id: 7, descricao: "HD Dell 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque:10 },
    { id: 8, descricao: "Placa de Video VGA Asus", preco: 2099.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque:10 },
    { id: 9, descricao: "Processador Ryzen i7 7900", preco: 999.99, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque:10 },
    { id: 10, descricao: "MacBook Pro - Apple", preco: 2499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque:10 },
    { id: 11, descricao: "Notebook Asus AMD Ryzen 5", preco: 4499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque:10 },
    { id: 12, descricao: "Mouse USB multifucional", preco: 19.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque:10 },
    { id: 13, descricao: "Mouse Gamer PC ", preco: 199.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque:10 },
    { id: 14, descricao: "Mini-Mouse Notebook", preco: 49.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque:10 },
    { id: 15, descricao: "Teclado Mecanico - RedDragon", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque:10 }, 
]