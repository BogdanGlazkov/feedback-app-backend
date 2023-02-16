import { Body, Controller, Get, Post } from "@nestjs/common";
import { createFeedbackDto } from "./dto/create-feedback.dto";
import { FeedbackService } from "./feedback.service";

@Controller("feedback")
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  create(@Body() feedbackDto: createFeedbackDto) {
    return this.feedbackService.createFeedback(feedbackDto);
  }

  @Get()
  getAll() {
    return this.feedbackService.getAllFeedback();
  }
}
