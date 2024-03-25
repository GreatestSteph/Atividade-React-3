import { Button, Table } from "react-bootstrap";

export default function TabelaFuncionarios(props) {
    function excluirFuncionarios(){
    
    };

    const estiloFormulario = {
        width: '100%',            
        padding: '10px',          
        color: 'black',
    };

    const estiloMenu = {
        botoesContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        botao: {
            width: '300px',
            margin: '10px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#000000',
            color: 'white',
            borderRadius: '10%',
            cursor: 'pointer',
            textDecoration: 'none',
        },
    };

    return (
        <div style={estiloFormulario}>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome_funcionario</th>
                        <th>Data_nascimento</th>
                        <th>Genero</th>
                        <th>EstadoCivil</th>
                        <th>RG</th>
                        <th>CEP</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                        <th>Beneficios</th>
                        <th>Escolaridade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaFuncionarios?.map((funcionario, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{funcionario.Nome_func}</td>
                                    <td>{funcionario.Data_nas_func}</td>
                                    <td>{funcionario.Genero_func}</td>
                                    <td>{funcionario.EstadoCivil_func}</td>
                                    <td>{funcionario.RG_func}</td>
                                    <td>{funcionario.CEP_func}</td>
                                    <td>{funcionario.Telefone_func}</td>
                                    <td>{funcionario.Email_func}</td>
                                    <td>{funcionario.Cargo_func}</td>
                                    <td>{funcionario.Salario_func}</td>
                                    <td>{funcionario.Beneficios_func}</td>
                                    <td>{funcionario.Escolaridade_func}</td>
                                    <td>
                                    <Button variant="primary" onClick={() => {
                                        
                                    }}
                                    >Alterar</Button>
                                    <Button variant="danger"onClick={() => {
                                        
                                    }}
                                    >Excluir</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <br/>
            <br/>
            <Button style={estiloMenu.botao} onClick={() => {
                props.setExibirTabelaFuncionarios(false);
            }}>
                Cadastrar Novo Funcionário
            </Button>
        </div>
    );
}
