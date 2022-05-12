import { http } from '@/services/config';
export default {

  lista:() => {
    return http.get('contas/lista')
  },

  pesquisar:(descricao) => {
    return http.get('contas?descricao='+descricao)
  },

  salvar:(conta) => {
    return http.post('conta',conta)
  }
}
