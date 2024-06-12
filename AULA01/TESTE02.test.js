import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cóvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Clóvis José");
    assertArrayIncludes(aluno, "José");
})
Deno.test("Teste array do professor(API)", () => {
    assertStringIncludes(professores,
        ["Davi", "Lais", "Alan"],
        "Opa! Algo deu errado!");   
})