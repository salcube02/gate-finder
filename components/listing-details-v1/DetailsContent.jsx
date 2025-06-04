"use client"
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

const DetailsContent = () => {
  // Project timeline data with cumulative percentage ranges
  const projectTimeline = [
    {
      phase: "Planning & Design",
      startPercentage: 0,
      endPercentage: 20,
      currentProgress: 100, // This phase is 100% complete
      status: "completed",
      date: "Jan 2024",
      description: "Architectural plans and permits approved"
    },
    {
      phase: "Foundation",
      startPercentage: 20,
      endPercentage: 35,
      currentProgress: 100, // This phase is 100% complete
      status: "completed", 
      date: "Mar 2024",
      description: "Foundation and structural work completed"
    },
    {
      phase: "Construction",
      startPercentage: 35,
      endPercentage: 70,
      currentProgress: 60, // This phase is 60% complete
      status: "in-progress",
      date: "May 2024",
      description: "Main construction and framing in progress"
    },
    {
      phase: "Interior Work",
      startPercentage: 70,
      endPercentage: 90,
      currentProgress: 25, // This phase is 25% complete
      status: "in-progress",
      date: "Aug 2024",
      description: "Electrical, plumbing, and interior finishing"
    },
    {
      phase: "Final Touches",
      startPercentage: 90,
      endPercentage: 100,
      currentProgress: 0, // This phase hasn't started
      status: "pending",
      date: "Nov 2024",
      description: "Landscaping and final inspections"
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

        <h4 className="mb30">Description</h4>
        <PropertyDescriptions />
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Property Details</h4>
          </div>
          <PropertyDetails />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Additional details</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div>
      {/* End .additional_details */}

      {/* Project Progress & Timeline Section */}
      <div className="project_progress_section mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb30">Project Progress & Timeline</h4>
            
            {/* Overall Progress Bar */}
            <div className="overall_progress_container mb40">
              <div className="d-flex justify-content-between align-items-center mb15">
                <h5 className="mb0">Overall Project Progress</h5>
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
                      <h6 className="mb5">Estimated Completion</h6>
                      <p className="mb0" style={{ color: '#666', fontSize: '14px' }}>December 2024</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat_item text-center p20" style={{ 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '8px',
                      border: '1px solid #e9ecef'
                    }}>
                      <h6 className="mb5">Days Remaining</h6>
                      <p className="mb0" style={{ color: '#666', fontSize: '14px' }}>~90 Days</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat_item text-center p20" style={{ 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '8px',
                      border: '1px solid #e9ecef'
                    }}>
                      <h6 className="mb5">Next Milestone</h6>
                      <p className="mb0" style={{ color: '#666', fontSize: '14px' }}>Interior Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="project_timeline">
              <h5 className="mb30">Project Timeline</h5>
              
              <div className="timeline_container">
                {projectTimeline.map((phase, index) => (
                  <div key={index} className="timeline_item mb30" style={{ 
                    position: 'relative',
                    paddingLeft: '60px',
                    borderLeft: index !== projectTimeline.length - 1 ? '2px solid #e9ecef' : 'none'
                  }}>
                    {/* Timeline dot */}
                    <div style={{
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
                            {phase.status === 'completed' ? 'COMPLETED' : phase.status === 'in-progress' ? `${phase.currentProgress}% DONE` : 'PENDING'}
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
                        This phase represents {phase.endPercentage - phase.startPercentage}% of the total project
                        {phase.status !== 'pending' && (
                          <span> • Currently {phase.currentProgress}% complete</span>
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
        <h4 className="mb30">Property Attachments</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div>
      {/* End .property_attachment_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb10">Features</h4>
          </div>
          {/* End .col */}

          <PropertyFeatures />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">
          Location{" "}
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
        <h4 className="mb30">Floor plans</h4>
        <div className="faq_according style2">
          <FloorPlans />
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
        <h4 className="mb10">What&apos;s Nearby</h4>
        <WhatsNearby />
      </div>
      {/* End what's nearby area */}

      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="total_review">
            <h4>896 Reviews</h4>
            <ul className="review_star_list mb0 pl10">
              <Ratings />
            </ul>
            <a className="tr_outoff pl10" href="#">
              ( 4.5 out of 5 )
            </a>
            <a className="write_review float-end fn-xsd" href="#">
              Write a Review
            </a>
          </div>
          {/* End .total_review */}
          <Comments />
          <div className="custom_hr"></div>

          <div className="mbp_comment_form style2">
            <h4>Write a Review</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>Your Rating & Review</p>
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
      `}</style>
    </>
  );
};

export default DetailsContent;
