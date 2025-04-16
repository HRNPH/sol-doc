import { Contract, AIResponse } from "@/types/contract";
import OpenAIService from "@/services/OpenAIService";

class ContractController {
  static async generateContract(contract: Contract): Promise<AIResponse> {
    // Delegate to the OpenAI service
    const result = await OpenAIService.generateClauses(contract);
    return result;
  }

  static async checkCompliance(content: string): Promise<AIResponse> {
    const result = await OpenAIService.complianceCheck(content);
    return result;
  }
}

export default ContractController;
