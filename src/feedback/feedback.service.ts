import { InjectModel } from "@nestjs/sequelize";
import { Injectable } from "@nestjs/common";
import { Feedback } from "./feedback.model";
import { createFeedbackDto } from "./dto/create-feedback.dto";

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback) private feedbackRepository: typeof Feedback
  ) {}

  async createFeedback(dto: createFeedbackDto) {
    const feedback = await this.feedbackRepository.create(dto);
    return feedback;
  }

  async getAllFeedback() {
    const allFeedbacks = await this.feedbackRepository.findAll();
    return allFeedbacks;
  }
}
