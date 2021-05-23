import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'otp/:set_otp/:email',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },

  // {
  //   path: 'forgot-password',
  //   loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  // },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'my-resources',
    loadChildren: () => import('./my-resources/my-resources.module').then( m => m.MyResourcesPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'my-program',
    loadChildren: () => import('./my-program/my-program.module').then( m => m.MyProgramPageModule)
  },
  {
    path: 'upcoming-session',
    loadChildren: () => import('./upcoming-session/upcoming-session.module').then( m => m.UpcomingSessionPageModule)
  },
  {
    path: 'upcoming-session2',
    loadChildren: () => import('./upcoming-session2/upcoming-session2.module').then( m => m.UpcomingSession2PageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'reward',
    loadChildren: () => import('./reward/reward.module').then( m => m.RewardPageModule)
  },
  {
    path: 'redeem',
    loadChildren: () => import('./redeem/redeem.module').then( m => m.RedeemPageModule)
  },
  {
    path: 'earn-points',
    loadChildren: () => import('./earn-points/earn-points.module').then( m => m.EarnPointsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'improve-ranking',
    loadChildren: () => import('./improve-ranking/improve-ranking.module').then( m => m.ImproveRankingPageModule)
  },
  {
    path: 'improve-rank-product',
    loadChildren: () => import('./improve-rank-product/improve-rank-product.module').then( m => m.ImproveRankProductPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then( m => m.SurveyPageModule)
  },
  {
    path: 'survey-feedback',
    loadChildren: () => import('./survey-feedback/survey-feedback.module').then( m => m.SurveyFeedbackPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'quiz-instructions',
    loadChildren: () => import('./quiz-instructions/quiz-instructions.module').then( m => m.QuizInstructionsPageModule)
  },
  {
    path: 'quiz-feedback',
    loadChildren: () => import('./quiz-feedback/quiz-feedback.module').then( m => m.QuizFeedbackPageModule)
  },
  {
    path: 'quiz-questions',
    loadChildren: () => import('./quiz-questions/quiz-questions.module').then( m => m.QuizQuestionsPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'journey-map',
    loadChildren: () => import('./journey-map/journey-map.module').then( m => m.JourneyMapPageModule)
  },
  {
    path: 'change-password/:email',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'signup-otp/:set_otp/:email',
    loadChildren: () => import('./signup-otp/signup-otp.module').then( m => m.SignupOtpPageModule)
  },
  {
    path: 'otp-verify',
    loadChildren: () => import('./otp-verify/otp-verify.module').then( m => m.OtpVerifyPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
