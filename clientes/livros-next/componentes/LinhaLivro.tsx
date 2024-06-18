import { ControleLivro, lista_livros, Livro } from "@/classes/controle/ControleLivros";
import { controleEditora } from "@/pages/api/editoras";
import { Button } from "react-bootstrap";
const controleLivro = new ControleLivro(lista_livros); 

interface LinhaLivroProps{
    livro: Livro; 
    excluir: (codigo: number) => void; 
}

    

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => { 
    const { livro, excluir } = props;
    
        const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
        
        return (
           
                
                <tr> 
                    <td>
                        <td>{livro.titulo}</td>
                        <Button variant="danger" onClick={() => excluir(livro.codigo)}>Excluir</Button>
                    </td>
                    
                    <td>{livro.resumo}</td>
                    <td>{nomeEditora}</td>
                    <td>
                        <ul>
                            {livro.autores.map((autor, index) => (
                                <li key={index}>{autor}</li>
                            ))}
                        </ul>
                    </td>
                    
                </tr>
           
        );
}
