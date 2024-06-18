import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import { Table, Button } from "react-bootstrap";
import { ControleLivro } from "@/classes/controle/ControleLivros";
import { ControleEditora, editoras } from "@/classes/controle/ControleEditora";
import { NextPage } from "next";
import { Livro } from "@/classes/modelo/Livros";

const LivroLista: NextPage = () => {
    const controleLivros = new ControleLivro();
    const controleEditora = new ControleEditora(editoras); 
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const obterLivros = async () => {
            try {
                const livrosCarregados = await controleLivros.obterLivros();
                setLivros(livrosCarregados);
                setCarregado(true); 
            } catch(error) {
                console.error("Erro ao carregar os livros: ", error);
                setCarregado(true); 
            }
        };
       
        obterLivros(); 
        
        
        
    }, [livros]);
    
    const excluir = async (codigo: string) => {
        try {
            await controleLivros.excluir(codigo);
            
        } catch (error) {
            console.error("Erro:", error);
        }
        
    };

    return (
        <>  
            <div className={styles.container}>
                <Head>
                    <title> Catalogo </title>
                </Head>
                <Menu/> 
                <main className='mt-2 px-5'>
                <h1>Catálogo de Livros </h1>
                {carregado ? (
                    <Table color="white" striped="columns" size="sm" className=''>
                        <thead>
                            <tr style={{color: "white", backgroundColor:"black"}} >
                                <th >Título</th>
                                <th >Resumo</th>
                                <th>Editora</th>
                                <th>Autores</th>
                            </tr>
                        </thead>
                        {livros && livros.length > 0 ? (
                            <tbody>
                                {livros.map((livro: any, index:any) => (
                                    <tr key={index}> 
                                        <td>
                                            <td>{livro.titulo}</td>
                                            <Button variant="danger" onClick={() => excluir(livro.codigo)}>Excluir</Button>
                                        </td>
                                        
                                        <td>{livro.resumo}</td>
                                        <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
                                        <td>
                                            <ul>
                                                {livro.autores.map((autor:any) => (
                                                    <li key={autor}>{autor}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <div>
                                <h1>Não há nenhum livro</h1>
                            </div>
                        )}
                    </Table>
                ) : (
                    <h1>Carregando...</h1>
                )}
                    </main>
            </div>
        </>
    )
};

export default LivroLista;
