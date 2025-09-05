import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, BookOpen, CheckCircle, AlertCircle, Lightbulb, ChevronRight, Download, Share2, Timer, Bookmark } from 'lucide-react';
import { PostData } from './PostTemplateFactory';

interface TutorialTemplateProps {
  postData: PostData;
  content: {
    steps: {
      title: string;
      description: string;
      image?: string;
      tips?: string[];
    }[];
    prerequisites?: string[];
    estimatedTime?: string;
  };
  language: 'en' | 'hu' | 'de';
}

const TutorialTemplate: React.FC<TutorialTemplateProps> = ({ postData, content, language }) => {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [currentStep, setCurrentStep] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const toggleStepComplete = (stepIndex: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepIndex)) {
      newCompleted.delete(stepIndex);
    } else {
      newCompleted.add(stepIndex);
    }
    setCompletedSteps(newCompleted);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: postData.title,
          text: postData.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const progressPercentage = (completedSteps.size / content.steps.length) * 100;

  return (
    <motion.article
      className="max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Tutorial Header */}
      <motion.header variants={itemVariants} className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{postData.date}</span>
          {content.estimatedTime && (
            <>
              <span>•</span>
              <Timer className="h-4 w-4" />
              <span>{content.estimatedTime}</span>
            </>
          )}
          {postData.author && (
            <>
              <span>•</span>
              <User className="h-4 w-4" />
              <span>{postData.author.name}</span>
            </>
          )}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-2 rounded-lg mb-4 inline-block">
          <span className="text-sm font-medium px-2">
            {language === 'en' ? 'Step-by-Step Tutorial' : language === 'hu' ? 'Lépésről lépésre útmutató' : 'Schritt-für-Schritt Anleitung'}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {postData.title}
        </h1>

        {postData.summary && (
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {postData.summary}
          </p>
        )}

        {/* Tutorial Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-900">
                {language === 'en' ? 'Steps' : language === 'hu' ? 'Lépések' : 'Schritte'}
              </span>
            </div>
            <p className="text-2xl font-bold text-blue-900">{content.steps.length}</p>
          </div>
          
          {content.estimatedTime && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-900">
                  {language === 'en' ? 'Duration' : language === 'hu' ? 'Időtartam' : 'Dauer'}
                </span>
              </div>
              <p className="text-2xl font-bold text-green-900">{content.estimatedTime}</p>
            </div>
          )}
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="font-semibold text-orange-900">
                {language === 'en' ? 'Progress' : language === 'hu' ? 'Haladás' : 'Fortschritt'}
              </span>
            </div>
            <p className="text-2xl font-bold text-orange-900">{Math.round(progressPercentage)}%</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-purple-600" />
              <span className="font-semibold text-purple-900">
                {language === 'en' ? 'Difficulty' : language === 'hu' ? 'Nehézség' : 'Schwierigkeit'}
              </span>
            </div>
            <p className="text-2xl font-bold text-purple-900">
              {language === 'en' ? 'Beginner' : language === 'hu' ? 'Kezdő' : 'Anfänger'}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share2 className="h-4 w-4" />
            <span>{language === 'en' ? 'Share' : language === 'hu' ? 'Megosztás' : 'Teilen'}</span>
          </button>
          <button
            onClick={toggleBookmark}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
              isBookmarked 
                ? 'border-yellow-500 bg-yellow-50 text-yellow-700' 
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span>{language === 'en' ? 'Save' : language === 'hu' ? 'Mentés' : 'Speichern'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            <span>{language === 'en' ? 'Download Guide' : language === 'hu' ? 'Útmutató letöltése' : 'Anleitung herunterladen'}</span>
          </button>
        </div>
      </motion.header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Prerequisites */}
          {content.prerequisites && content.prerequisites.length > 0 && (
            <motion.div variants={itemVariants} className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <h2 className="text-lg font-bold text-amber-900">
                  {language === 'en' ? 'Prerequisites' : language === 'hu' ? 'Előfeltételek' : 'Voraussetzungen'}
                </h2>
              </div>
              <ul className="space-y-2">
                {content.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-amber-800">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Progress Bar */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">
                {language === 'en' ? 'Your Progress' : language === 'hu' ? 'Az ön haladása' : 'Ihr Fortschritt'}
              </h3>
              <span className="text-sm text-gray-600">
                {completedSteps.size} / {content.steps.length} {language === 'en' ? 'completed' : language === 'hu' ? 'teljesítve' : 'abgeschlossen'}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </motion.div>

          {/* Tutorial Steps */}
          <div className="space-y-6">
            {content.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-white p-6 rounded-lg border-2 transition-all ${
                  currentStep === index 
                    ? 'border-blue-500 shadow-lg' 
                    : completedSteps.has(index)
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Step number and completion status */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => toggleStepComplete(index)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        completedSteps.has(index)
                          ? 'bg-green-500 text-white'
                          : currentStep === index
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {completedSteps.has(index) ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </button>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <div className="prose prose-gray max-w-none mb-4">
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Step image */}
                    {step.image && (
                      <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}

                    {/* Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="h-4 w-4 text-blue-600" />
                          <span className="font-semibold text-blue-900">
                            {language === 'en' ? 'Tips' : language === 'hu' ? 'Tippek' : 'Tipps'}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Step navigation */}
                    <div className="flex items-center justify-between mt-6">
                      <button
                        onClick={() => setCurrentStep(index)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentStep === index
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {language === 'en' ? 'Focus on this step' : language === 'hu' ? 'Erre a lépésre fókuszálás' : 'Auf diesen Schritt fokussieren'}
                      </button>
                      
                      {index < content.steps.length - 1 && (
                        <button
                          onClick={() => setCurrentStep(index + 1)}
                          className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <span>{language === 'en' ? 'Next step' : language === 'hu' ? 'Következő lépés' : 'Nächster Schritt'}</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Navigation */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Quick Navigation' : language === 'hu' ? 'Gyors navigáció' : 'Schnellnavigation'}
            </h3>
            <div className="space-y-2">
              {content.steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    currentStep === index 
                      ? 'border-blue-500 bg-blue-50 text-blue-900' 
                      : completedSteps.has(index)
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      completedSteps.has(index) 
                        ? 'bg-green-500 text-white' 
                        : currentStep === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {completedSteps.has(index) ? '✓' : index + 1}
                    </div>
                    <span className="font-medium truncate">{step.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Author Info */}
          {postData.author && (
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Tutorial Author' : language === 'hu' ? 'Útmutató szerzője' : 'Tutorial Autor'}
              </h3>
              <div className="flex items-center gap-4">
                {postData.author.avatar && (
                  <img
                    src={postData.author.avatar}
                    alt={postData.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{postData.author.name}</p>
                  {postData.author.role && (
                    <p className="text-sm text-gray-600">{postData.author.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Completion Certificate */}
          {progressPercentage === 100 && (
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <div className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">
                  {language === 'en' ? 'Congratulations!' : language === 'hu' ? 'Gratulálunk!' : 'Glückwunsch!'}
                </h3>
                <p className="text-green-100 mb-4">
                  {language === 'en' ? 'You have completed this tutorial!' : language === 'hu' ? 'Teljesítette ezt az útmutatót!' : 'Sie haben dieses Tutorial abgeschlossen!'}
                </p>
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {language === 'en' ? 'Get Certificate' : language === 'hu' ? 'Tanúsítvány megszerzése' : 'Zertifikat erhalten'}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default TutorialTemplate;
