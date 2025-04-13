import { NextResponse } from 'next/server';
import { client, getDoctors } from '@/lib/sanity';
import { sanityConfig } from '@/lib/sanity-config';

export async function GET() {
  try {
    // Basic environment info
    const envInfo = {
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV,
      region: process.env.VERCEL_REGION,
    };

    // Sanity config info (excluding any secrets)
    const configInfo = {
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: sanityConfig.useCdn,
    };

    // Test simple sanity connection
    let sanityConnected = false;
    let projectInfo = null;
    try {
      // Simple ping to Sanity API
      projectInfo = await client.fetch('*[_type == "sanity.imageAsset"][0:1]');
      sanityConnected = true;
    } catch (e) {
      console.error('Sanity connection test failed:', e);
    }

    // Test doctors query
    let doctorsData = null;
    let doctorsCount = 0;
    let doctorsError = null;
    try {
      doctorsData = await getDoctors();
      doctorsCount = doctorsData ? doctorsData.length : 0;
    } catch (e) {
      doctorsError = e instanceof Error ? e.message : String(e);
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: envInfo,
      sanity: {
        config: configInfo,
        connected: sanityConnected,
        hasImageAssets: projectInfo !== null && projectInfo.length > 0,
      },
      doctors: {
        count: doctorsCount,
        error: doctorsError,
        sample: doctorsData && doctorsCount > 0 ? [
          {
            name: doctorsData[0].name,
            slug: doctorsData[0].slug,
            hasImage: !!doctorsData[0].image,
          }
        ] : null,
      }
    });
  } catch (error) {
    console.error('Debug API error:', error);
    return NextResponse.json(
      { error: 'Internal debug endpoint error', message: String(error) },
      { status: 500 }
    );
  }
} 