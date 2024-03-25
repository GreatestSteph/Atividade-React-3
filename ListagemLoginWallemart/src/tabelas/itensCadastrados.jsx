import FormularioItens from "../formulario_componente/formularioitens";
import TabelaItens from "../tabelas/telaTabelaItens";
import { useState } from "react";

export default function ExibirCadastroItens(props) {
    
    const [exibirTabelaItens, setExibirTabelaItens] = useState(true);
    const [listaItens, setListaItens] = useState([]);

    if (exibirTabelaItens) {
        return (
            <div>
                <h1>Itens Cadastrados</h1>
                <br/>
                <TabelaItens 
                    listaItens={listaItens} 
                    setExibirTabelaItens={setExibirTabelaItens}
                />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Itens Cadastrados</h1>
                <br/>
                <FormularioItens 
                    setExibirTabelaItens={setExibirTabelaItens}
                    listaItens={listaItens}
                    setListaItens={setListaItens}
                />
            </div>
        )
    }
}
