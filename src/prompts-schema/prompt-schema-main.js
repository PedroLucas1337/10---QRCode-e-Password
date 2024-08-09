import chalk from "chalk"

const PromptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QR Code ou (2 - Password"),
        pattern: /^[1-2]+$/, //seja apenas 1 ou dois e depois da escolha, terminar
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default PromptSchemaMain;