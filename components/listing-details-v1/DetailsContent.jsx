"use client"
import { useTranslations } from 'next-intl';
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WalkScore from "../common/listing-details/WalkScore";
import WhatsNearby from "../common/listing-details/WhatsNearby";

const DetailsContent = ({ id }) => {
  let t;
  try {
    t = useTranslations('detailsContent');
  } catch (error) {
    console.warn('Translation hook failed, using fallbacks:', error);
    // Fallback function when translations fail
    t = (key) => {
      const fallbacks = {
        'description': 'Description',
        'projectDetails': 'Project Details',
        'additionalDetails': 'Additional details',
        'projectProgressTimeline': 'Project Progress & Timeline',
        'overallProjectProgress': 'Overall Project Progress',
        'estimatedCompletion': 'Estimated Completion',
        'daysRemaining': 'Days Remaining',
        'nextMilestone': 'Next Milestone',
        'projectTimeline': 'Project Timeline',
        'phases.planningDesign': 'Planning & Design',
        'phases.foundation': 'Foundation',
        'phases.construction': 'Construction',
        'phases.interiorWork': 'Interior Work',
        'phases.finalTouches': 'Final Touches',
        'phases.planningDesignDesc': 'Architectural plans and permits approved',
        'phases.foundationDesc': 'Foundation and structural work completed',
        'phases.constructionDesc': 'Main construction and framing in progress',
        'phases.interiorWorkDesc': 'Electrical, plumbing, and interior finishing',
        'phases.finalTouchesDesc': 'Landscaping and final inspections',
        'dates.jan2024': 'Jan 2024',
        'dates.mar2024': 'Mar 2024',
        'dates.may2024': 'May 2024',
        'dates.aug2024': 'Aug 2024',
        'dates.nov2024': 'Nov 2024',
        'status.completed': 'COMPLETED',
        'status.inProgress': 'DONE',
        'status.pending': 'PENDING'
      };
      return fallbacks[key] || key;
    };
  }

  // Project timeline data with cumulative percentage ranges
  const projectTimeline = [
    {
      phase: t('phases.planningDesign'),
      startPercentage: 0,
      endPercentage: 20,
      currentProgress: 100, // This phase is 100% complete
      status: "completed",
      date: t('dates.jan2024'),
      description: t('phases.planningDesignDesc')
    },
    {
      phase: t('phases.foundation'),
      startPercentage: 20,
      endPercentage: 35,
      currentProgress: 100, // This phase is 100% complete
      status: "completed", 
      date: t('dates.mar2024'),
      description: t('phases.foundationDesc')
    },
    {
      phase: t('phases.construction'),
      startPercentage: 35,
      endPercentage: 70,
      currentProgress: 60, // This phase is 60% complete
      status: "in-progress",
      date: t('dates.may2024'),
      description: t('phases.constructionDesc')
    },
    {
      phase: t('phases.interiorWork'),
      startPercentage: 70,
      endPercentage: 90,
      currentProgress: 25, // This phase is 25% complete
      status: "in-progress",
      date: t('dates.aug2024'),
      description: t('phases.interiorWorkDesc')
    },
    {
      phase: t('phases.finalTouches'),
      startPercentage: 90,
      endPercentage: 100,
      currentProgress: 0, // This phase hasn't started
      status: "pending",
      date: t('dates.nov2024'),
      description: t('phases.finalTouchesDesc')
    }
  ];

  // Calculate overall project progress based on completed phases and current phase progress
  const calculateOverallProgress = () => {
    let totalProgress = 0;
    
    for (let phase of projectTimeline) {
      const phaseWeight = phase.endPercentage - phase.startPercentage;
      const phaseContribution = (phaseWeight * phase.currentProgress) / 100;
      totalProgress += phaseContribution;
    }
    
    return Math.round(totalProgress);
  };

  const overallProgress = calculateOverallProgress();

  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem />
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">{t('description')}</h4>
        <PropertyDescriptions />
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">{t('projectDetails')}</h4>
          </div>
          <PropertyDetails />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">{t('additionalDetails')}</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div>
      {/* End .additional_details */}

      {/* Project Progress & Timeline Section */}
      <div className="project_progress_section mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb30">{t('projectProgressTimeline')}</h4>
            
            {/* Overall Progress Bar */}
            <div className="overall_progress_container mb40">
              <div className="d-flex justify-content-between align-items-center mb15">
                <h5 className="mb0">{t('overallProjectProgress')}</h5>
                <span className="progress_percentage" style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  color: '#4A9E96' 
                }}>
                  {overallProgress}%
                </span>
              </div>
              
              <div style={{
                width: '100%',
                height: '12px',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <div
                  style={{
                    width: `${overallProgress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #4A9E96, #20c997)',
                    borderRadius: '6px',
                    transition: 'width 0.8s ease-in-out',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shimmer 2s infinite'
                  }} />
                </div>
              </div>

              <div className="progress_stats mt20">
                <div className="row">
                  <div className="col-md-4">
                    <div className="stat_item text-center p20" style={{ 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '8px',
                      border: '1px solid #e9ecef'
                    }}>
                      <h6 className="mb5">{t('estimatedCompletion')}</h6>
                      <p className="mb0" style={{ color: '#666', fontSize: '14px' }}>{t('december2024')}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat_item text-center p20" style={{ 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '8px',
                      border: '1px solid #e9ecef'
                    }}>
                      <h6 className="mb5">{t('daysRemaining')}</h6>
                      <p className="mb0" style={{ color: '#666', fontSize: '14px' }}>{t('daysCount')}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat_item text-center p20" style={{ 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '8px',
                      border: '1px solid #e9ecef'
                    }}>
                      <h6 className="mb5">{t('nextMilestone')}</h6>
                      <p className="mb0" style={{ color: '#666', fontSize: '14px' }}>{t('interiorWork')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="project_timeline">
              <h5 className="mb30">{t('projectTimeline')}</h5>
              
              <div className="timeline_container">
                {projectTimeline.map((phase, index) => (
                  <div key={index} className={`timeline_item mb30 ${index === projectTimeline.length - 1 ? 'timeline_item_last' : ''}`} style={{ 
                    position: 'relative',
                    paddingLeft: '60px',
                    borderLeft: index !== projectTimeline.length - 1 ? '2px solid #e9ecef' : 'none'
                  }}>
                    {/* Timeline dot */}
                    <div className="timeline_dot" style={{
                      position: 'absolute',
                      left: '-8px',
                      top: '0',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: phase.status === 'completed' 
                        ? '#28a745' 
                        : phase.status === 'in-progress' 
                        ? '#FABF2B' 
                        : '#dee2e6',
                      border: '3px solid #fff',
                      boxShadow: '0 0 0 3px #e9ecef'
                    }} />

                    <div className="timeline_content" style={{
                      backgroundColor: '#fff',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <div className="d-flex justify-content-between align-items-start mb15">
                        <div>
                          <h6 className="mb5" style={{ color: '#333' }}>{phase.phase}</h6>
                          <p className="mb0" style={{ 
                            fontSize: '12px', 
                            color: '#666',
                            textTransform: 'uppercase',
                            fontWeight: '500'
                          }}>
                            {phase.date}
                          </p>
                        </div>
                        <div className="text-end">
                          <span style={{ 
                            fontSize: '16px', 
                            fontWeight: '700',
                            color: phase.status === 'completed' 
                              ? '#28a745' 
                              : phase.status === 'in-progress' 
                              ? '#FABF2B' 
                              : '#6c757d'
                          }}>
                            {phase.startPercentage}% - {phase.endPercentage}%
                          </span>
                          <div style={{
                            fontSize: '10px',
                            color: phase.status === 'completed' 
                              ? '#28a745' 
                              : phase.status === 'in-progress' 
                              ? '#FABF2B' 
                              : '#6c757d',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            marginTop: '2px'
                          }}>
                            {phase.status === 'completed' ? t('status.completed') : phase.status === 'in-progress' ? `${phase.currentProgress}% ${t('status.inProgress')}` : t('status.pending')}
                          </div>
                        </div>
                      </div>

                      <p className="mb15" style={{ fontSize: '14px', color: '#666' }}>
                        {phase.description}
                      </p>

                      {/* Individual phase progress bar showing how much of this phase range is complete */}
                      <div style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        {/* Background showing the phase range */}
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            background: '#e9ecef',
                            borderRadius: '4px'
                          }}
                        />
                        {/* Progress showing how much of this phase is done */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: `${phase.currentProgress}%`,
                            height: '100%',
                            background: phase.status === 'completed' 
                              ? 'linear-gradient(90deg, #28a745, #20c997)' 
                              : phase.status === 'in-progress' 
                              ? 'linear-gradient(90deg, #FABF2B, #fd7e14)' 
                              : 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            borderRadius: '4px',
                            transition: 'width 0.6s ease-in-out'
                          }}
                        />
                      </div>

                      {/* Phase contribution text */}
                      <div className="mt10" style={{ fontSize: '11px', color: '#999' }}>
                        {t('thisPhasePrepresents')} {phase.endPercentage - phase.startPercentage}% {t('ofTotalProject')}
                        {phase.status !== 'pending' && (
                          <span> • {t('currentlyComplete')} {phase.currentProgress}% {t('complete')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Project Progress & Timeline Section */}

      <div className="property_attachment_area">
        <h4 className="mb30">{t('projectAttachments')}</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div>
      {/* End .property_attachment_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb10">{t('features')}</h4>
          </div>
          {/* End .col */}

          <PropertyFeatures />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">
          {t('location')}{" "}
          <small className="float-end">
            1421 San Pedro St, Los Angeles, CA 90015
          </small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation />
        </div>
      </div>
      {/* End .location_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">{id == "1" || id == "2" || id == "3" ? t('floorPlans') : id == "4" || id == "5" || id == "6" ? t('houseDetails') : t('floorPlans')}</h4>
        <div className="faq_according style2">
          <FloorPlans id={id} />
        </div>
      </div>
      {/* End .floor_plane */}

      <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div>
      {/* End property-video  */}

      <div className="walkscore_area mt30">
        <WalkScore />
      </div>
      {/* End walkscore_area */}

      <div className="whats_nearby mt30">
        <h4 className="mb10">{t('whatsNearby')}</h4>
        <WhatsNearby />
      </div>
      {/* End what's nearby area */}

      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="total_review">
            <h4>896 {t('reviews')}</h4>
            <ul className="review_star_list mb0 pl10">
              <Ratings />
            </ul>
            <a className="tr_outoff pl10" href="#">
              ( 4.5 {t('outOf')} 5 )
            </a>
            <a className="write_review float-end fn-xsd" style={{width: "100%",
    display: "flex",
    "justifyContent": "end",
    right: "-30px"}} 
    href="#">
              {t('writeReview')}
            </a>
          </div>
          {/* End .total_review */}
          <Comments />
          <div className="custom_hr"></div>

          <div className="mbp_comment_form style2">
            <h4>{t('writeReview')}</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>{t('yourRatingReview')}</p>
              </li>
            </ul>
            <ReviewBox />
          </div>
        </div>
      </div>
      {/* End review and comment area area */}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        /* RTL Timeline adjustments */
        [dir="rtl"] .timeline_item {
          padding-right: 60px !important;
          padding-left: 0 !important;
          border-right: 2px solid #e9ecef !important;
          border-left: none !important;
        }
        
        [dir="rtl"] .timeline_item_last {
          border-right: none !important;
        }
        
        [dir="rtl"] .timeline_dot {
          right: -8px !important;
          left: auto !important;
        }
        
        [dir="rtl"] .float-end {
          float: left !important;
        }
        
        [dir="ltr"] .float-end {
          float: right !important;
        }
        
        /* Text alignment for RTL */
        [dir="rtl"] .text-end {
          text-align: left !important;
        }
        
        [dir="rtl"] .d-flex {
          direction: rtl;
        }
      `}</style>
    </>
  );
};

export default DetailsContent;
