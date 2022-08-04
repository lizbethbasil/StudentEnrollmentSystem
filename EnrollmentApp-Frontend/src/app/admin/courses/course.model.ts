export class CourseModel {
    constructor(
        public code: String,
        public name: String,
        public technology: String,
        public intro: String,
        public overview: String,
        public info: String,
        public eligibility: String,
        public fee: Number,
        public count: Number,
        public image: String
    ) {}
}